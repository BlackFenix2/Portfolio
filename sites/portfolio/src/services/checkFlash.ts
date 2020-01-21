export default function() {
  const hasFlash =
    typeof navigator.mimeTypes['application/x-shockwave-flash'] !== 'undefined';
  return hasFlash;
}
