import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { MODULE_NAME } from './common/constants';
import { createXtlsSdkFactory } from './common/utils';
import {
    ASYNC_OPTIONS_TYPE,
    ConfigurableModuleClass,
    MODULE_OPTIONS_TOKEN,
    OPTIONS_TYPE,
} from './xtls-sdk-nestjs.builder';
import { ModuleRef } from '@nestjs/core';
import { XtlsModuleOptions } from './interfaces';
import { XtlsApi } from '@localzet/xtls-sdk';

@Global()
@Module({})
export class XtlsSdkNestjsModule extends ConfigurableModuleClass {
    constructor(private readonly moduleRef: ModuleRef) {
        super();
    }

    public static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
        const XtlsApiNameProvider: Provider = {
            provide: MODULE_NAME,
            useValue: MODULE_NAME,
        };

        const XtlsApiProvider: Provider = {
            provide: MODULE_NAME,
            useFactory: (): XtlsApi => createXtlsSdkFactory(options),
        };

        const { providers, exports, ...rest } = super.forRoot(options);

        return {
            providers: [...(providers ?? []), XtlsApiNameProvider, XtlsApiProvider],
            exports: [...(exports ?? []), XtlsApiNameProvider, XtlsApiProvider],
            ...rest,
        };
    }

    public static forRootAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
        const XtlsApiNameProvider: Provider = {
            provide: MODULE_NAME,
            useValue: MODULE_NAME,
        };

        const XtlsApiProvider: Provider = {
            provide: MODULE_NAME,
            useFactory: (options: XtlsModuleOptions): XtlsApi => createXtlsSdkFactory(options),
            inject: [MODULE_OPTIONS_TOKEN],
        };

        const { providers, exports, ...rest } = super.forRootAsync(options);

        return {
            providers: [...(providers ?? []), XtlsApiNameProvider, XtlsApiProvider],
            exports: [...(exports ?? []), XtlsApiNameProvider, XtlsApiProvider],
            ...rest,
        };
    }
}
