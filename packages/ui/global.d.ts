export {}

// Helper for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CusBackTop: typeof import('@gcvin/ui')['BackTop']
    CusBackTopTsx: typeof import('@gcvin/ui')['BackTopTsx']
    CusCheckAll: typeof import('@gcvin/ui')['CheckAll']
    CusCheckAllTsx: typeof import('@gcvin/ui')['CheckAllTsx']
  }
}
