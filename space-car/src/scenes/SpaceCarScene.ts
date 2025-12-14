import * as THREE from 'three'

export class SpaceCarScene {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private container: HTMLElement
  private animationId: number | null = null

  constructor(container: HTMLElement) {
    this.container = container
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    this.renderer = new THREE.WebGLRenderer({ antialias: true })

    this.init()
    this.setupScene()
    this.loadModels()
    this.animate()
  }

  private init() {
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    this.renderer.setClearColor(0x1a1a1a)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.container.appendChild(this.renderer.domElement)

    // Setup camera position
    this.camera.position.set(5, 5, 5)
    this.camera.lookAt(0, 0, 0)

    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this))
  }

  private setupScene() {
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    this.scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    this.scene.add(directionalLight)

    // Add ground plane
    const groundGeometry = new THREE.PlaneGeometry(20, 20)
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    this.scene.add(ground)
  }

  private async loadModels() {
    try {
      // Load GLTF models
      const models = ['space_car', 'landing_gear', 'blade_ring']

      for (const modelName of models) {
        const response = await fetch(`/src/assets/models/${modelName}.glb`)
        if (response.ok) {
          // In a real implementation, you'd use GLTFLoader here
          console.log(`Model ${modelName} would be loaded here`)
        }
      }
    } catch (error) {
      console.error('Error loading models:', error)
    }
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate)
    this.renderer.render(this.scene, this.camera)
  }

  private onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
  }

  public dispose() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    window.removeEventListener('resize', this.onWindowResize)
    this.renderer.dispose()
    this.container.removeChild(this.renderer.domElement)
  }
}