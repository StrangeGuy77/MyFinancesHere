const foregroundEntryPoint = document.createElement('div')
let reactJSScript = document.createElement('script')

foregroundEntryPoint.id = 'foreground'
reactJSScript.src = 'foreground.bundle.js'

foregroundEntryPoint.appendChild(reactJSScript)

document.querySelector('body').appendChild(foregroundEntryPoint)
