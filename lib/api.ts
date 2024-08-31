export async function fetchStoryBySlug(slug: string) {
    const response = await fetch(`/api/stories/${slug}`)
    if (!response.ok) {
        throw new Error('Story not found')
    }
    const data = await response.json()
    return data
}
