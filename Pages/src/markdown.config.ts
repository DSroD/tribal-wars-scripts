export const options = {
    overrides: {
        h1: {
            component: "h1",
            props: {
                className: "text-2xl font-bold mb-2"
            }
        },
        h2: {
            component: "h2",
            props: {
                className: "text-xl font-bold mb-2"
            }
        },
        h3: {
            component: "h3",
            props: {
                className: "text-md font-bold mb-2"
            }
        },
        ul: {
            component: "ul",
            props: {
                className: "mb-2 pl-4 list-disc"
            }
        },
        ol: {
            component: "ol",
            props: {
                className: "mb-2 pl-4 list-decimal"
            }
        },
        input: {
            props: {
                className: "bg-zinc-700",
                disabled: "true"
            }
        },
        p: {
            props: {
                className: "mb-2"
            }
        },
        a: {
            props: {
                className: "text-red-500 hover:text-red-700"
            }
        },
        blockquote: {
            props: {
                className: "border-l-4 border-red-700 pl-2"
            }
        },
        code: {
            props: {
                className: "bg-slate-200 p-0.5 border-2 border-slate-300 rounded-md inline-block"
            }
        }


    }
}