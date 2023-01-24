import Comment from '../../shared/Comment/Comment'
import TextBox from '../../shared/TextBox/TextBox'

const CommentSection = () => {
    return (
        <section className="flex flex-col px-8 py-4 min-h-fit w-[800px] mx-auto">
            <div className="py-6">
                <h2 className="text-2xl text-transparent bg-clip-text bg-main-gradient bg-[length:30%_100px]">
          Add your comment
                </h2>
            </div>
            <Comment
                dislikes="214"
                likes="9283"
                response
                erase
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur
                turpis eu dignissim convallis. Aliquam volutpat dolor quam. Sed sed gravida quam. "
            >
                <Comment
                    response={false}
                    dislikes="1"
                    likes="3"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                consectetur turpis eu dignissim convallis. Aliquam volutpat dolor quam. Sed
                sed gravida quam. Nam eget rhoncus tellus, et mattis ligula. Nullam quis
                tellus et mi tincidunt ullamcorper bibendum quis est. Phasellus sit amet felis
                a leo egestas finibus at in quam. Donec congue diam nec velit posuere, eget dignissim
                urna pulvinar. In ultrices finibus efficitur. In suscipit nisi et lectus faucibus porta.
                Nunc leo odio, tincidunt in nisi vitae, dignissim placerat sem. Praesent sagittis egestas
                tincidunt. In hac habitasse platea dictumst. Ut iaculis et libero sed mattis. Phasellus."
                />
                <Comment
                    response={false}
                    dislikes="3"
                    likes="22"
                    text="Donec eros massa, portalit nisl vel nisi."
                />
            </Comment>
            <Comment
                dislikes="1"
                likes="3"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                consectetur turpis eu dignissim convallis. Aliquam volutpat dolor quam. Sed
                sed gravida quam. Nam eget rhoncus tellus, et mattis ligula. Nullam quis
                tellus et mi tincidunt ullamcorper bibendum quis est. Phasellus sit amet felis
                a leo egestas finibus at in quam. Donec congue diam nec velit posuere, eget dignissim
                urna pulvinar. In ultrices finibus efficitur. In suscipit nisi et lectus faucibus porta.
                Nunc leo odio, tincidunt in nisi vitae, dignissim placerat sem. Praesent sagittis egestas
                tincidunt. In hac habitasse platea dictumst. Ut iaculis et libero sed mattis. Phasellus."
            />
            <Comment
                dislikes="3"
                likes="22"
                text="Donec eros massa, portalit nisl vel nisi."
            />
            <TextBox />
        </section>
    )
}

export default CommentSection
