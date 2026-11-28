import { cn } from "cn"

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn("rounded-xl border border-border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return <div data-slot="card-header" className={cn("flex flex-col gap-1.5 px-6 pt-6", className)} {...props} />
}

function CardTitle({ className, ...props }) {
  return <h2 data-slot="card-title" className={cn("text-lg font-semibold leading-none", className)} {...props} />
}

function CardDescription({ className, ...props }) {
  return <p data-slot="card-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function CardAction({ className, ...props }) {
  return <div data-slot="card-action" className={cn("mt-2", className)} {...props} />
}

function CardContent({ className, ...props }) {
  return <div data-slot="card-content" className={cn("px-6 py-6", className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return <div data-slot="card-footer" className={cn("flex items-center px-6 pb-6", className)} {...props} />
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
