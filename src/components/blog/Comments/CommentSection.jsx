import apiClient from '@utils/api-client'
import useApi from 'hooks/useApi'
import Comment from '../../shared/Comment/Comment'
import TextBox from '../../shared/TextBox/TextBox'

const CommentSection = ({ id }) => {
    const { data: { data } } = useApi(() => apiClient.get(`/posts/${id}/comments`))
    return (
        <section className="flex flex-col px-8 py-4 min-h-fit w-[800px] mx-auto">
            <div className="py-6">
                <h2 className="text-2xl text-transparent bg-clip-text bg-main-gradient bg-[length:30%_100px]">
          Add your comment
                </h2>
            </div>
            {data?.map((item, index) =>
                <Comment
                    key={index}
                    text={item.content}
                    likes={item.likes}
                    dislikes={item.dislikes}
                    responses={item.responses}
                    isParent={item.isParent}
                />
            )}
            <TextBox postId={id}/>
        </section>
    )
}

export default CommentSection
