import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Great Books of the Western World as selected by Mortimer Adler
          </h2>
          <p>
            This is an ongoing project to create a free e-book collection of all the{' '}
            <em>The Great Books of the Western World</em>.{' '}
          </p>
          <p>
            The Great Books of the Western World is a remarkable collection that encompasses a wide
            spectrum of the seminal works shaping Western thought over several centuries. This
            collection, meticulously curated, traverses diverse disciplines such as philosophy,
            literature, science, and history, featuring the illustrious minds from ancient Greeks
            like Aristotle and Plato to the more contemporary like Shakespeare and Freud. Through
            these volumes, readers can journey across the intellectual tapestry of the West,
            examining the evolving ideas and dialogues that have persistently driven human progress.
            The collection is not merely an anthology of influential texts but an invitation to
            engage with the fundamental questions and principles that continue to mold our modern
            world. Through the Great Books, readers are ushered into a rich dialogue with the
            thinkers whose inquiries have defined the contours of Western civilization, offering a
            profound exploration into our collective past and a better understanding of the present.
          </p>
          <h2 className="text-2xl font-bold leading-8 tracking-tight">Ebooks</h2>
          <p>Source: https://www.mpc.edu/academics/academic-divisions/humanities-division/programs-centers/about-the-great-books-program/great-books-list</p>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li key="a" className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    {/* <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100"> */}
                    Homer
                    {/* </Link> */}
                  </h2>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <p><b>Iliad:</b></p>
                      <Link
                        href="https://www.gutenberg.org/ebooks/6130"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "Project Gutenberg"`}
                      >
                        Project Gutenberg &rarr;
                      </Link>
                    </div>
                    <div className="space-y-6">
                      <p><b>Odyssey:</b></p>
                      <Link
                        href="https://www.gutenberg.org/ebooks/1727"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "Project Gutenberg"`}
                      >
                        Project Gutenberg &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li key="a" className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    {/* <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100"> */}
                    Aeschylus, Sophocles, Euripides, Aristophanes
                    {/* </Link> */}
                  </h2>

                  Sophocles. Plays

                  Euripides. Plays

                  Aristophanes. Plays
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <p><b>Aeschylus. Plays:</b></p>
                      <p>ToDo:</p>
                      {/* <Link
                        href="https://www.gutenberg.org/ebooks/6130"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "Project Gutenberg"`}
                      >
                        Project Gutenberg &rarr;
                      </Link> */}
                    </div>
                    <div className="space-y-6">
                      <p><b>Sophocles. Plays:</b></p>
                      <p>ToDo:</p>
                      {/* <Link
                        href="https://www.gutenberg.org/ebooks/1727"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "Project Gutenberg"`}
                      >
                        Project Gutenberg &rarr;
                      </Link> */}
                    </div>
                    <div className="space-y-6">
                      <p><b>Euripides. Plays:</b></p>
                      <p>ToDo:</p>
                      {/* <Link
                        href="https://www.gutenberg.org/ebooks/1727"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "Project Gutenberg"`}
                      >
                        Project Gutenberg &rarr;
                      </Link> */}
                    </div>
                    <div className="space-y-6">
                      <p><b>Aristophanes. Plays:</b></p>
                      <p>ToDo:</p>
                      {/* <Link
                        href="https://www.gutenberg.org/ebooks/1727"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "Project Gutenberg"`}
                      >
                        Project Gutenberg &rarr;
                      </Link> */}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
