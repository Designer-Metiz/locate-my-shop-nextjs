// Minimal fallback to ensure JSX intrinsic elements are typed
// This prevents TS errors like:
// "JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists."
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


