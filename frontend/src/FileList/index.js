import React from "react";

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="" />
            </FileInfo>
        </li>
    </Container>
)

export default FileList;