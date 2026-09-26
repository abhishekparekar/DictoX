Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path "DictoX_Marketing_Website_PRD.docx"))
$entry = $zip.GetEntry("word/document.xml")
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$content = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

# Parse XML to extract paragraphs
$xml = [xml]$content
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")

$paragraphs = $xml.SelectNodes("//w:p", $ns)
$output = foreach ($p in $paragraphs) {
    $texts = $p.SelectNodes(".//w:t", $ns)
    if ($texts) {
        ($texts | ForEach-Object { $_.InnerText }) -join ""
    }
}

$output | Out-File -FilePath "prd_extracted.txt" -Encoding utf8
Write-Output "Extracted $($output.Count) paragraphs."
