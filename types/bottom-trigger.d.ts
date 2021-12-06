/**
 *
 * @param elm - The target element of scrolled area
 * @param onBottom - The callback called when it scrolls to the bottom of the target area
 * @param offBottom - The callback called when it scrolls out from the bottom of the target area
 * @param options - The options. Offset from the bottom.
 *
 */
declare function bottomTrigger(elm: HTMLElement | Document | Window | null | undefined, onBottom?: () => void, offBottom?: () => void, options?: {
    offset: number;
}): void;

export { bottomTrigger };
