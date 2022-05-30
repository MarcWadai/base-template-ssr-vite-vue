import fetch from "node-fetch";

export { onBeforeRender, passToClient }

async function onBeforeRender(pageContext) {
    try {
        // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
        const events = await fetch("http://localhost:3000/api/events").then(res => res.json())
        console.log('events', events)
        return {
            pageContext: {
                pageProps: { events }
            }
        }
    } catch(err) {
        console.error(err)
    }
}

const passToClient = ['pageProps']