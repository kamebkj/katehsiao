import React from 'react'
import { Project } from '../interfaces'
import { FiArrowUpRight } from 'react-icons/fi'

type Props = {
  data: Project
}

const ListItem = ({ data }: Props) => {
  return (
    <div className="mb-16">
      <img
        src={`${data.image}`}
        alt={`${data.id}`}
        className="mb-4 bg-indigo-50 dark:bg-gray-800 rounded-lg transition-all"
      />
      <div className="text-base font-medium text-gray-800 antialiased mb-2 flex items-center dark:text-gray-100 transition-all">
        <a
          href={`${data.url}`}
          target="_blank"
          rel="noreferrer"
          className="h-6"
        >
          {data.title}
        </a>
        <FiArrowUpRight className="ml-1 -mb-1" />
      </div>
      <p className="text-base text-gray-700 antialiased dark:text-gray-200 transition-all">
        {data.description}
      </p>
      {/* <Link href="/projects/[id]" as={`/projects/${data.id}`}>
        <a>Link</a>
  </Link> */}
    </div>
  )
}

export default ListItem
