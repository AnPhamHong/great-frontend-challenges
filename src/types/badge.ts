export type BadgeVariant = "success" | "warning" | "neutral"

export type BadgeProps  = {
    text: string,
    variant: BadgeVariant,
    className?: string,
    withIcon?: boolean
}
