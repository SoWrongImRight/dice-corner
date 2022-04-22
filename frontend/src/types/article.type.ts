export default interface ArticleData {
    id?: number | null,
    title: string,
    author: number,
    excerpt?: string,
    content: string,
    imageurl: string,
    status: string
}