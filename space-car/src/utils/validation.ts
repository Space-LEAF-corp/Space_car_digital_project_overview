// Data validation utilities for space car engineering data

// BOM validation
export const validateBomItem = (item: any) => {
  const errors: string[] = []

  if (!item.id || typeof item.id !== 'string') {
    errors.push('BOM item must have a valid string ID')
  }

  if (!item.name || typeof item.name !== 'string') {
    errors.push('BOM item must have a valid string name')
  }

  if (!item.category || typeof item.category !== 'string') {
    errors.push('BOM item must have a valid string category')
  }

  if (typeof item.quantity !== 'number' || item.quantity <= 0) {
    errors.push('BOM item quantity must be a positive number')
  }

  if (!item.unit || typeof item.unit !== 'string') {
    errors.push('BOM item must have a valid string unit')
  }

  if (typeof item.weight !== 'number' || item.weight < 0) {
    errors.push('BOM item weight must be a non-negative number')
  }

  if (!item.supplier || typeof item.supplier !== 'string') {
    errors.push('BOM item must have a valid string supplier')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Load analysis validation
export const validateLoadCase = (loadCase: any) => {
  const errors: string[] = []

  if (!loadCase.case || typeof loadCase.case !== 'string') {
    errors.push('Load case must have a valid string name')
  }

  if (typeof loadCase.load !== 'number' || loadCase.load <= 0) {
    errors.push('Load case load must be a positive number')
  }

  if (typeof loadCase.factor !== 'number' || loadCase.factor <= 0) {
    errors.push('Load case safety factor must be a positive number')
  }

  if (typeof loadCase.maxStress !== 'number' || loadCase.maxStress < 0) {
    errors.push('Load case max stress must be a non-negative number')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Mission sequence validation
export const validateMissionTask = (task: any) => {
  const errors: string[] = []

  if (!task.id || typeof task.id !== 'string') {
    errors.push('Mission task must have a valid string ID')
  }

  if (!task.task || typeof task.task !== 'string') {
    errors.push('Mission task must have a valid string description')
  }

  if (typeof task.completed !== 'boolean') {
    errors.push('Mission task completed status must be a boolean')
  }

  if (!task.phase || typeof task.phase !== 'string') {
    errors.push('Mission task must have a valid string phase')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Parameter validation
export const validateParameter = (param: any) => {
  const errors: string[] = []

  if (!param.name || typeof param.name !== 'string') {
    errors.push('Parameter must have a valid string name')
  }

  if (!param.value && param.value !== 0) {
    errors.push('Parameter must have a value')
  }

  if (!param.unit || typeof param.unit !== 'string') {
    errors.push('Parameter must have a valid string unit')
  }

  if (!param.category || typeof param.category !== 'string') {
    errors.push('Parameter must have a valid string category')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Generic array validation
export const validateArray = (
  array: any[],
  validator: (item: any) => { isValid: boolean; errors: string[] }
): { isValid: boolean; errors: string[] } => {
  if (!Array.isArray(array)) {
    return { isValid: false, errors: ['Input must be an array'] }
  }

  const allErrors: string[] = []

  array.forEach((item, index) => {
    const result = validator(item)
    if (!result.isValid) {
      result.errors.forEach(error => {
        allErrors.push(`Item ${index}: ${error}`)
      })
    }
  })

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  }
}

// Range validation
export const validateRange = (value: number, min: number, max: number, fieldName: string) => {
  if (value < min || value > max) {
    return {
      isValid: false,
      errors: [`${fieldName} must be between ${min} and ${max}, got ${value}`]
    }
  }

  return { isValid: true, errors: [] }
}

// Type validation helpers
export const isString = (value: any): boolean => typeof value === 'string'
export const isNumber = (value: any): boolean => typeof value === 'number' && !isNaN(value)
export const isBoolean = (value: any): boolean => typeof value === 'boolean'
export const isPositiveNumber = (value: any): boolean => isNumber(value) && value > 0
export const isNonNegativeNumber = (value: any): boolean => isNumber(value) && value >= 0