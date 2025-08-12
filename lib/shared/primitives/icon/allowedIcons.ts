export type AllowedIcons = (typeof allowedIcons.flatten)[number]
export type AllowedIconsGroup<T extends keyof typeof allowedIcons.group> = (typeof allowedIcons.group)[T][number]

export const allowedIcons = {
  group: {
    general: ['general/close', 'general/plus']
  },
  flatten: ['general/close', 'general/plus']
} as const
