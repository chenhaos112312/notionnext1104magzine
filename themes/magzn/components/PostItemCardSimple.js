import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CategoryItem from './CategoryItem'
import { useGlobal } from '@/lib/global'
import LazyImage from '@/components/LazyImage'


/**
 * 不带图片
 * @param {*} param0
 * @returns
 */
const PostItemCardSimple = ({ post, showSummary }) => {
  const { siteInfo } = useGlobal()
  const cover = post?.pageCoverThumbnail || siteInfo?.pageCover
  return (
    
    <div
      key={post.id}
      className='lg:mb-6 max-w-screen-3xl border-t border-gray-300 mr-8 py-2 gap-y-3 flex flex-col dark:border-gray-800 '>
      <div className='flex mr-2 items-center'>
      {siteConfig('MAGZINE_POST_LIST_COVER') && (
          <Link
            href={post?.href}
            passHref
            className={
              'cursor-pointer hover:underline leading-tight text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400'
            }>
            <div className='w-full h-40 aspect-video overflow-hidden mb-2'>
              <LazyImage
                alt={post?.title}
                src={cover}
                style={cover ? {} : { height: '0px' }}
                className='w-full h-40 aspect-video object-cover'
              />
            </div>
          </Link>
        )}
        {/* 此处代码注释并在前面同级增加以下代码： */}
        {/* {siteConfig('MAGZINE_POST_LIST_CATEGORY') && (
          <CategoryItem category={post.category} />
        )} */}
      </div>

      {/* 文章标题 */}
      <Link
        href={post?.href}
        passHref
        className={
          'cursor-pointer hover:underline text-lg leading-tight dark:text-gray-300  dark:hover:text-gray-400'
        }>
        <h2>
          {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
          {post.title}
        </h2>
      </Link>

      <div className='text-sm text-gray-700'>{post.date?.start_date}</div>
    </div>
  )
}

export default PostItemCardSimple
