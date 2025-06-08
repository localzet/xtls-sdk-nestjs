import { XtlsApi } from '@localzet/xtls-sdk';
import { Logger } from '@nestjs/common';
import { IXtlsConfig } from './interfaces';

const logger = new Logger('xtls-sdk-nestjs');

export function createXtlsSdkFactory(moduleOptions: IXtlsConfig): XtlsApi {
    const xtlsApi = new XtlsApi(moduleOptions.ip, moduleOptions.port);
    logger.log(`XtlsApi initialized`);
    return xtlsApi;
}
