Add-Type -AssemblyName System.Drawing
Get-ChildItem -Path "public/images" -Filter "*.png" | ForEach-Object {
    try {
        $img = [System.Drawing.Image]::FromFile($_.FullName)
        Write-Output "$($_.Name):$($img.Width):$($img.Height)"
        $img.Dispose()
    } catch {
        Write-Output "Error: $($_.Name)"
    }
}
