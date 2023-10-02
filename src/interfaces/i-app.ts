interface App {
  content: AppElement
  scripts: AppScript[]
}

interface AppScript {
  exec: () => void
}

interface AppElement {
  constructor: (appRoot: App, appendElement: AppElement[]) => void
  show: () => void
  toggle: () => void
  hide: () => void
  appRoot: App
  element: HTMLElement
}

interface AppContainerElement extends AppElement {
  content: AppElement[]
}

interface AppTextElement extends AppElement {
  setTextContent: () => void
  textContent: string
  dataSource: string
}

interface AppImageElement extends AppElement {
  dataSource: string
}

interface AppElementTagNameMap {
  'text': AppTextElement
  'image': AppImageElement
  'container': AppContainerElement
}

export type { AppElement, AppContainerElement, AppTextElement, AppImageElement, AppElementTagNameMap }
