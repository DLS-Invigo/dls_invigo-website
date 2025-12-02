import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

// Haal alle items op uit een collection
export function getCollection(collection: string) {
  const collectionPath = path.join(contentDirectory, collection)
  
  if (!fs.existsSync(collectionPath)) {
    return []
  }
  
  const fileNames = fs.readdirSync(collectionPath)
  
  const items = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(collectionPath, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        content,
        ...data,
      }
    })
  
  return items
}

// Haal een enkel item op uit een collection
export function getCollectionItem(collection: string, slug: string) {
  const fullPath = path.join(contentDirectory, collection, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data,
  }
}

// Converteer markdown naar HTML
export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

// Haal singleton content op (zoals homepage settings)
export function getSingleton(name: string) {
  const fullPath = path.join(contentDirectory, `${name}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    content,
    ...data,
  }
}

// Sorteer items op datum (nieuwste eerst)
export function sortByDate(items: any[]) {
  return items.sort((a, b) => {
    const dateA = new Date(a.date || 0)
    const dateB = new Date(b.date || 0)
    return dateB.getTime() - dateA.getTime()
  })
}
