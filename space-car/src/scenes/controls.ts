import * as THREE from 'three'

export const setupControls = (camera: THREE.Camera, domElement: HTMLElement) => {
  let isMouseDown = false
  let previousMousePosition = { x: 0, y: 0 }

  const onMouseDown = (event: MouseEvent) => {
    isMouseDown = true
    previousMousePosition = { x: event.clientX, y: event.clientY }
  }

  const onMouseMove = (event: MouseEvent) => {
    if (!isMouseDown) return

    const deltaX = event.clientX - previousMousePosition.x
    const deltaY = event.clientY - previousMousePosition.y

    // Rotate camera around target
    const sensitivity = 0.005
    camera.rotation.y -= deltaX * sensitivity
    camera.rotation.x -= deltaY * sensitivity

    // Clamp vertical rotation
    camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x))

    previousMousePosition = { x: event.clientX, y: event.clientY }
  }

  const onMouseUp = () => {
    isMouseDown = false
  }

  const onWheel = (event: WheelEvent) => {
    event.preventDefault()
    const zoomSpeed = 0.1
    const direction = event.deltaY > 0 ? 1 : -1

    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.z += direction * zoomSpeed
      camera.position.z = Math.max(1, Math.min(20, camera.position.z))
    }
  }

  // Add event listeners
  domElement.addEventListener('mousedown', onMouseDown)
  domElement.addEventListener('mousemove', onMouseMove)
  domElement.addEventListener('mouseup', onMouseUp)
  domElement.addEventListener('wheel', onWheel)

  // Return cleanup function
  return () => {
    domElement.removeEventListener('mousedown', onMouseDown)
    domElement.removeEventListener('mousemove', onMouseMove)
    domElement.removeEventListener('mouseup', onMouseUp)
    domElement.removeEventListener('wheel', onWheel)
  }
}

// Keyboard controls for additional navigation
export const setupKeyboardControls = (camera: THREE.Camera) => {
  const moveSpeed = 0.1

  const onKeyDown = (event: KeyboardEvent) => {
    switch (event.key.toLowerCase()) {
      case 'w':
      case 'arrowup':
        camera.position.z -= moveSpeed
        break
      case 's':
      case 'arrowdown':
        camera.position.z += moveSpeed
        break
      case 'a':
      case 'arrowleft':
        camera.position.x -= moveSpeed
        break
      case 'd':
      case 'arrowright':
        camera.position.x += moveSpeed
        break
      case 'q':
        camera.position.y += moveSpeed
        break
      case 'e':
        camera.position.y -= moveSpeed
        break
    }
  }

  window.addEventListener('keydown', onKeyDown)

  return () => {
    window.removeEventListener('keydown', onKeyDown)
  }
}