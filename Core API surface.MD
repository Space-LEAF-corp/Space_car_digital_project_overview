// Initialization
AEM.init(config: AEMConfig): void

// Streaming
AEM.ingestMotionFrame(frame: MotionFrame): void
AEM.ingestVideoFrame(frame: VideoFrame): void

// Inference
AEM.detectUserMotion(): UserMotionEvent | null
AEM.detectEnvironmentalMotion(): EnvEvent | null
AEM.computeManeuverConfidence(
  userMotion: UserMotionEvent,
  env: EnvEvent
): number

AEM.checkSignalCompliance(
  maneuverConfidence: number,
  signalState: SignalState
): ComplianceEvent

// Learning
AEM.learnFromSession(session: SessionData): void
AEM.exportModelSnapshot(): ModelSnapshot
AEM.importModelSnapshot(snapshot: ModelSnapshot): void
