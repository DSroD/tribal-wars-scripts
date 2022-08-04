interface DraggableProps {
    handle?: string
    cancel?: string
}

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
    draggable(props?: DraggableProps): this
}