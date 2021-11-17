import * as React from 'react'

interface OwnProps {
  title: string
}

export const PageHeader: React.FC<OwnProps> = ({title}) => {
  return <div className="mb-3 mt-3"><h1>{title}</h1></div>
}
