"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
let NotificationService = NotificationService_1 = class NotificationService {
    constructor() {
        this.logger = new common_1.Logger(NotificationService_1.name);
    }
    handleCron() {
        const curTime = new Date().toLocaleString();
        this.logger.debug('Called when the second: ' + curTime);
    }
};
__decorate([
    schedule_1.Cron('0 26 16 * * *', {
        timeZone: 'Asia/Seoul',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotificationService.prototype, "handleCron", null);
NotificationService = NotificationService_1 = __decorate([
    common_1.Injectable()
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map