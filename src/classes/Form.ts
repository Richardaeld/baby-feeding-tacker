export interface Form {
   header: string,
   inputs: Array<{
      key      ?: string,
      name      : string,
      type      : 'input_radio' | 'textarea' | 'input_checkbox' | 'input_text',
      radio    ?: string[],
      className?: string,
      checked  ?: boolean,
      inputType?: string,
      step     ?: number,
      min      ?: number,
      max      ?: number,
      events   ?: {
         onClick :Array<(e : Event) => void>,
      }
   }>
}

