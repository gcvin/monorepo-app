export {}

// Helper for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    GcvinBackTop: (typeof import('@gcvin/ui'))['BackTop']
    GcvinBackTopTsx: (typeof import('@gcvin/ui'))['BackTopTsx']
    GcvinCheckAll: (typeof import('@gcvin/ui'))['CheckAll']
    GcvinCheckAllTsx: (typeof import('@gcvin/ui'))['CheckAllTsx']
    ExpandCollapse: (typeof import('@gcvin/ui'))['ExpandCollapse']
    EditableTsx: (typeof import('@gcvin/ui'))['EditableTsx']
  }
}
declare module 'components-helper'
