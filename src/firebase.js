// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp 
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX19VWQ81SAB5Hy_gkMyV6Dwx9SZgy6iI",
  authDomain: "job-portal-85414.firebaseapp.com",
  databaseURL: "https://job-portal-85414-default-rtdb.firebaseio.com",
  projectId: "job-portal-85414",
  storageBucket: "job-portal-85414.firebasestorage.app",
  messagingSenderId: "699831995778",
  appId: "1:699831995778:web:d37872ece61ce195d4d39b",
  measurementId: "G-6W641DF6KY"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Safe browser analytics initialization
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

// Multi-tenant configuration specifically for DictoX: "dictox-web"
export const TENANT_ID = "dictox-web";
export const TENANT_NAME = "dictox-web";

// =========================================================================
// 1. INQUIRIES MANAGEMENT (CRUD)
// =========================================================================

/**
 * Saves an inquiry under tenant "dictox-web" (tenants/dictox-web/inquiries)
 */
export async function saveTenantInquiry(inquiryData) {
  const payload = {
    ...inquiryData,
    tenantId: TENANT_ID,
    tenant: TENANT_NAME,
    source: inquiryData.source || "website_contact_form",
    status: "New",
    createdAt: serverTimestamp(),
    submittedAt: new Date().toISOString(),
  };

  try {
    const tenantInquiriesRef = collection(db, "tenants", TENANT_ID, "inquiries");
    const docRef = await addDoc(tenantInquiriesRef, payload);

    try {
      await addDoc(collection(db, "dictox_web_inquiries"), {
        ...payload,
        primaryDocId: docRef.id
      });
    } catch (e) {
      // backup
    }

    return { id: docRef.id, success: true };
  } catch (error) {
    console.error("Error saving inquiry to tenants/dictox-web/inquiries:", error);
    const fallbackRef = await addDoc(collection(db, "dictox_web_inquiries"), payload);
    return { id: fallbackRef.id, success: true };
  }
}

/**
 * Retrieves all inquiries under tenant "dictox-web"
 */
export async function fetchTenantInquiries() {
  try {
    const tenantCol = collection(db, "tenants", TENANT_ID, "inquiries");
    const q = query(tenantCol, orderBy("createdAt", "desc"));
    const snap = await getDocs(q);

    if (!snap.empty) {
      return snap.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
        collectionPath: `tenants/${TENANT_ID}/inquiries`
      }));
    }

    const backupSnap = await getDocs(query(collection(db, "dictox_web_inquiries"), orderBy("createdAt", "desc")));
    if (!backupSnap.empty) {
      return backupSnap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        collectionPath: "dictox_web_inquiries"
      }));
    }

    const legacySnap = await getDocs(collection(db, "dictox_inquiries"));
    return legacySnap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
      collectionPath: "dictox_inquiries"
    }));
  } catch (err) {
    console.warn("fetchTenantInquiries fallback:", err);
    try {
      const snap = await getDocs(collection(db, "tenants", TENANT_ID, "inquiries"));
      return snap.docs.map((d) => ({ id: d.id, ...d.data(), collectionPath: `tenants/${TENANT_ID}/inquiries` }));
    } catch (err2) {
      console.error("Failed to fetch inquiries:", err2);
      return [];
    }
  }
}

/**
 * Updates status of an inquiry
 */
export async function updateInquiryStatus(docId, newStatus, collectionPath = `tenants/${TENANT_ID}/inquiries`) {
  try {
    const docRef = collectionPath.includes("/") 
      ? doc(db, ...collectionPath.split("/"))
      : doc(db, collectionPath, docId);
    
    await updateDoc(docRef, {
      status: newStatus,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (err) {
    console.error("Error updating status:", err);
    return false;
  }
}

/**
 * Deletes an inquiry
 */
export async function deleteTenantInquiry(docId, collectionPath = `tenants/${TENANT_ID}/inquiries`) {
  try {
    const docRef = collectionPath.includes("/") 
      ? doc(db, ...collectionPath.split("/"))
      : doc(db, collectionPath, docId);
      
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.error("Error deleting inquiry:", err);
    return false;
  }
}

// =========================================================================
// 2. DYNAMIC RESULTS / CASE STUDIES (CRUD)
// =========================================================================

/**
 * Saves a new campaign result / case study under tenant "dictox-web"
 */
export async function saveTenantResult(resultData) {
  const payload = {
    ...resultData,
    tenantId: TENANT_ID,
    createdAt: serverTimestamp(),
    updatedAt: new Date().toISOString(),
  };

  const resultsCol = collection(db, "tenants", TENANT_ID, "results");
  const docRef = await addDoc(resultsCol, payload);
  return { id: docRef.id, success: true };
}

/**
 * Fetches dynamic results from tenant "dictox-web"
 */
export async function fetchTenantResults() {
  try {
    const resultsCol = collection(db, "tenants", TENANT_ID, "results");
    const snap = await getDocs(query(resultsCol, orderBy("createdAt", "desc")));
    if (!snap.empty) {
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    }
    return [];
  } catch (err) {
    console.warn("fetchTenantResults fallback:", err);
    try {
      const snap = await getDocs(collection(db, "tenants", TENANT_ID, "results"));
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      return [];
    }
  }
}

/**
 * Deletes a result
 */
export async function deleteTenantResult(docId) {
  try {
    const docRef = doc(db, "tenants", TENANT_ID, "results", docId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.error("Error deleting result:", err);
    return false;
  }
}

// =========================================================================
// 3. DYNAMIC TRUSTED BRAND LOGOS (CRUD)
// =========================================================================

/**
 * Saves a brand logo / name under tenant "dictox-web"
 */
export async function saveTenantBrand(brandData) {
  const payload = {
    ...brandData,
    tenantId: TENANT_ID,
    createdAt: serverTimestamp(),
  };

  const brandsCol = collection(db, "tenants", TENANT_ID, "brands");
  const docRef = await addDoc(brandsCol, payload);
  return { id: docRef.id, success: true };
}

/**
 * Fetches dynamic brand logos from tenant "dictox-web"
 */
export async function fetchTenantBrands() {
  try {
    const brandsCol = collection(db, "tenants", TENANT_ID, "brands");
    const snap = await getDocs(query(brandsCol, orderBy("createdAt", "desc")));
    if (!snap.empty) {
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    }
    return [];
  } catch (err) {
    console.warn("fetchTenantBrands fallback:", err);
    try {
      const snap = await getDocs(collection(db, "tenants", TENANT_ID, "brands"));
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      return [];
    }
  }
}

/**
 * Real-time listener for tenant brand logos
 */
export function subscribeTenantBrands(callback) {
  try {
    const brandsCol = collection(db, "tenants", TENANT_ID, "brands");
    const q = query(brandsCol, orderBy("createdAt", "desc"));
    return onSnapshot(
      q,
      (snap) => {
        const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        callback(items);
      },
      (err) => {
        console.warn("subscribeTenantBrands fallback to one-time fetch:", err);
        fetchTenantBrands().then(callback);
      }
    );
  } catch (err) {
    console.warn("subscribeTenantBrands init error:", err);
    fetchTenantBrands().then(callback);
    return () => {};
  }
}

/**
 * Deletes a brand logo
 */
export async function deleteTenantBrand(docId) {
  try {
    const docRef = doc(db, "tenants", TENANT_ID, "brands", docId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.error("Error deleting brand:", err);
    return false;
  }
}

// =========================================================================
// 4. DYNAMIC FOOTER & AGENCY SETTINGS (GET & SAVE)
// =========================================================================

export const DEFAULT_SETTINGS = {
  logoUrl: '/images/logo1.png',
  phone1: '+91 7796407424',
  phone2: '+91 9834036821',
  whatsapp: '917796407424',
  email: 'dictoxmarketing@gmail.com',
  address: 'Office No. 603, 6th Floor, Navale Icon, Bengaluru - Mumbai Hwy, Near Navale Bridge, Wadgaon Budruk, Narhe, Pune, Maharashtra 411041',
  hours: 'Monday to Saturday — 10:00 AM to 7:00 PM',
  instagram: 'https://www.instagram.com/dictoxmarketing',
  facebook: 'https://www.facebook.com/dictoxmarketing',
  tagline: 'Performance Marketing & Customer Acquisition Agency based in Pune, helping businesses across India generate predictable revenue through Meta Ads, Google Ads & WhatsApp Automation.',
};

// In-memory cache for tenant settings
let cachedSettings = null;
let cachedSettingsPromise = null;

/**
 * Saves footer / agency settings under tenant "dictox-web"
 */
export async function saveTenantSettings(settingsData) {
  cachedSettings = { ...DEFAULT_SETTINGS, ...settingsData };
  const docRef = doc(db, "tenants", TENANT_ID, "settings", "global");
  await setDoc(docRef, {
    ...settingsData,
    tenantId: TENANT_ID,
    updatedAt: serverTimestamp(),
  }, { merge: true });
  return true;
}

/**
 * Fetches footer / agency settings under tenant "dictox-web"
 * Includes in-memory caching and a quick 2.5s fallback to prevent offline 10s timeout warnings.
 */
export async function fetchTenantSettings() {
  if (cachedSettings) {
    return cachedSettings;
  }
  if (cachedSettingsPromise) {
    return cachedSettingsPromise;
  }

  cachedSettingsPromise = (async () => {
    try {
      const docRef = doc(db, "tenants", TENANT_ID, "settings", "global");
      
      // Quick timeout fallback so app never hangs or logs offline warning if network is slow/offline
      const fetchPromise = getDoc(docRef);
      const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(null), 2500));
      
      const snap = await Promise.race([fetchPromise, timeoutPromise]);
      if (snap && snap.exists && snap.exists()) {
        cachedSettings = { ...DEFAULT_SETTINGS, ...snap.data() };
        return cachedSettings;
      }
      return DEFAULT_SETTINGS;
    } catch (err) {
      // Graceful offline fallback to defaults
      return DEFAULT_SETTINGS;
    } finally {
      cachedSettingsPromise = null;
    }
  })();

  return cachedSettingsPromise;
}

