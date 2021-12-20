import { FC } from 'react';
import { css } from 'linaria';

interface Props {
    children?: React.ReactNode;
};

const container = css`
    :global() {
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        main, menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: baseline;
        }

        article, aside, details, figcaption, figure,
        footer, header, hgroup, main, menu, nav, section {
            display: block;
        }

        *, *::before, *::after {
            box-sizing: border-box;
        }
    }

    display: block;
    margin-bottom: 30px;
`;

const PageContainer: FC<Props> = ({ children }) => (
    <div className={ container }>{ children }</div>
);

export default PageContainer;