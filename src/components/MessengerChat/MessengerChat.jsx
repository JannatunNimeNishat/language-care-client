import { FacebookProvider, CustomChat } from 'react-facebook';

const MessengerChat = () => {
    return (
        <>
            <FacebookProvider appId="356996390017398" chatSupport>
                <CustomChat pageId="149402214919590" minimized={true} />
            </FacebookProvider>
        </>

    );
};

export default MessengerChat;