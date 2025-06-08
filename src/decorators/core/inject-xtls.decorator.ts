import { Inject } from '@nestjs/common';
import { MODULE_NAME } from '../../common/constants';

export function InjectXtls(): ParameterDecorator {
    return Inject(MODULE_NAME);
}
