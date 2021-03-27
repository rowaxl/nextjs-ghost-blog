import fetch from 'isomorphic-unfetch'

const GHOST_API_KEY = process.env['GHOST_API_KEY'] ? process.env['GHOST_API_KEY'] : ''
const GHOST_API_URL = process.env['GHOST_API_URL'] ? process.env['GHOST_API_URL'] : ''

export const getPosts = async () => {
  const res = await fetch(`${GHOST_API_URL}/ghost/api/v3/content/posts/?key=${GHOST_API_KEY}`)

  const { posts } = await res.json()

  return posts
}

export const getPost = async (slug) => {
  const res = await fetch(`${GHOST_API_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${GHOST_API_KEY}&fields=title,slug,html`)

  const { posts } = await res.json()

  return posts[0]
}