import fetch from "node-fetch";

export { onBeforeRender, passToClient }

async function onBeforeRender(pageContext) {
    try {
        const id = pageContext.routeParams.eventId
        // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
        const event = await fetch("http://localhost:3000/api/events/" + id).then(res => res.json())
        console.log('event', event)
        return {
            pageContext: {
                pageProps: { event }
            }
        }
    } catch(err) {
        console.error(err)
    }
}

const passToClient = ['pageProps']