import Container from '~/components/container/Container';

import ItemPlayList from '~/components/ItemPlayList/ItemPlayList';

function HomeAutoTheme({ data }) {
    return (
        <Container title={data?.title}>
            {data?.items?.map(
                (item, index) => index < 4 && <ItemPlayList description timeLoad={0} key={index} data={item} />,
            )}
        </Container>
    );
}

export default HomeAutoTheme;
