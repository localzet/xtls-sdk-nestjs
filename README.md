<h1 align="center"><a href="#"><img src="https://static.zorin.space/assets/media/logos/ZorinProjectsSP.svg" alt="Image"></a></h1>

# NestJS XTLS SDK Module

![GitHub top language](https://img.shields.io/github/languages/top/localzet/xtls-sdk-nestjs)
![GitHub Repo stars](https://img.shields.io/github/stars/localzet/xtls-sdk-nestjs)

![npm version](https://img.shields.io/npm/v/@localzet/xtls-sdk-nestjs)
![GitHub Tag](https://img.shields.io/github/v/tag/localzet/xtls-sdk-nestjs)

![Build Status](https://img.shields.io/github/actions/workflow/status/localzet/xtls-sdk-nestjs/.github/workflows/deploy-lib.yml)
![Downloads](https://img.shields.io/npm/dt/@localzet/xtls-sdk-nestjs)
![License](https://img.shields.io/npm/l/@localzet/xtls-sdk-nestjs)
![NPM Last Update](https://img.shields.io/npm/last-update/%40localzet%2Fxtls-sdk-nestjs)

![Known Vulnerabilities](https://snyk.io/test/github/localzet/xtls-sdk-nestjs/badge.svg)
![Coverage Status](https://img.shields.io/codecov/c/github/localzet/xtls-sdk-nestjs)


## Installation

```bash
npm install @localzet/xtls-sdk-nestjs
```

## Quick Start

### Synchronous Configuration

```typescript
import { XtlsSdkNestjsModule } from '@localzet/xtls-sdk-nestjs';

@Module({
  imports: [
    XtlsSdkNestjsModule.forRoot({
      ip: 'your-ip-address',
      port: 'your-port',
    }),
  ],
})
export class AppModule {}
```

### Asynchronous Configuration

```typescript
import { XtlsSdkNestjsModule } from '@localzet/xtls-sdk-nestjs';

@Module({
  imports: [
    XtlsSdkNestjsModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ip: configService.get('XTLS_IP'),
        port: configService.get('XTLS_PORT'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

## Usage in Services

Use the `@InjectXtls()` decorator to inject the XTLS SDK instance into your services:

```typescript
import { Injectable } from '@nestjs/common';
import { InjectXtls } from '@localzet/xtls-sdk-nestjs';
import { XtlsApi } from '@localzet/xtls-sdk';

@Injectable()
export class YourService {
  constructor(@InjectXtls() private readonly xtlsApi: XtlsApi) {}

  async yourMethod() {
    // Use xtlsApi here
  }
}
```

## Configuration Options

| Option | Type   | Description                             |
| ------ | ------ | --------------------------------------- |
| ip     | string | The IP address for the XTLS connection  |
| port   | string | The port number for the XTLS connection |

## API Reference

### XtlsSdkNestjsModule

- `forRoot(options: XtlsModuleOptions)`: Static method for synchronous module configuration
- `forRootAsync(options: AsyncModuleOptions)`: Static method for asynchronous module configuration

### Decorators

- `@InjectXtls()`: Decorator for injecting the XTLS SDK instance

## License

AGPL-3.0-only

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please open an issue in the GitHub repository.
