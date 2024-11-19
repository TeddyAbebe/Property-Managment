import React from "react"

const ToastMessage = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div>
      <div style={{ fontWeight: "bold", fontSize: "16px" }}>{title}</div>
      <div style={{ fontSize: "14px", color: "#888" }}>{description}</div>
    </div>
  )
}

export default ToastMessage
