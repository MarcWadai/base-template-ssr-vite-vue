import { createSSRApp, h } from 'vue'
import PageLayout from './PageLayout.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faCalendarDay, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';



export { createApp }

function createApp(pageContext) {
  config.autoAddCss = false; /* eslint-disable import/first */
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        PageLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  }
  const app = createSSRApp(PageWithLayout)
  library.add(faCalendar, faCalendarDay, faArrowLeft)
  app.component('font-awesome-icon', FontAwesomeIcon)
  return app
}
