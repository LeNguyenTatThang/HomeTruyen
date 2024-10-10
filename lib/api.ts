export async function fetchStoryBySlug(slug: string) {
    const response = await fetch(`/api/stories/${slug}`)
    if (!response.ok) {
        throw new Error('Story not found')
    }
    const data = await response.json()
    return data
}
export async function getStories() {
    const response = await fetch(`/api/stories`)
    if (!response.ok) {
        throw new Error('Story not found')
    }
    const data = await response.json()
    return data
}
//Get 14 stories in home page
export async function getLastestStories() {
    const response = await fetch(`/api/stories/latest`)
    if (!response.ok) {
        throw new Error('Story not found')
    }
    const data = await response.json()
    return data
}
//get 14 stories with status: Done in home page
export async function getCompletedStories() {
    const response = await fetch(`/api/stories/completed`)
    if (!response.ok) {
        throw new Error('Story not found')
    }
    const data = await response.json()
    return data
}
//get story chapter detail
export async function getChapterDetail(slug: string, chuong: string) {
    const response = await fetch(`/api/stories/${slug}/${chuong}`)
    if (!response.ok) {
        throw new Error('Story not found')
    }
    const data = await response.json()
    return data
}