import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function Viewer3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current!
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#101214')

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.set(3, 2, 6)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x404040, 1.0)
    scene.add(hemiLight)
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0)
    dirLight.position.set(5, 10, 7.5)
    scene.add(dirLight)

    const loader = new GLTFLoader()
    loader.load('/assets/models/space_car.glb', (gltf) => {
      const model = gltf.scene
      model.scale.set(1, 1, 1)
      scene.add(model)
    }, undefined, (error) => {
      console.warn('Failed to load space car model, using placeholder geometry:', error)
      // Create a placeholder geometry
      const geometry = new THREE.BoxGeometry(2, 1, 4)
      const material = new THREE.MeshLambertMaterial({ color: 0x00ff88 })
      const placeholder = new THREE.Mesh(geometry, material)
      scene.add(placeholder)
    })

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    let raf = 0
    const tick = () => {
      controls.update()
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '60vh', borderRadius: 12, overflow: 'hidden' }} />
}