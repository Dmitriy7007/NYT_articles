export type Post = {
  _id: number
  abstract: string
  web_url: string
  multimedia: [
    {
      url: string
    }
  ]
  pub_date: string
  source: string
  section_name: string
}

export type Posts = Post[]

export type PostResponse = {
  response: {
    docs: Post[]
  }
}
