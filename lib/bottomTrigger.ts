/**
 * 
 * @param elm - The target element of scrolled area
 * @param callback - The callback called when it scrolls to the bottom of the target area
 * @param options - The options. Offset from the bottom.
 * 
 */
export function bottomTrigger(
  elm: HTMLElement | Document | Window | null | undefined,
  callback: () => void,
  options?: {
    offset: number
  }
) {
  elm && elm.addEventListener('scroll', scrollHandler)

  function scrollHandler(evt: Event) {
    const target = (
      evt.target === document ? (evt.target as Document).documentElement : evt.target
    ) as HTMLElement

    const scrollTop = target.scrollTop
    const clientHeight = target.clientHeight
    const scrollHeight = target.scrollHeight

    const isBottom = scrollTop + clientHeight >= scrollHeight - options?.offset ?? 0

    if (isBottom) {
      callback()
    }
  }
}
