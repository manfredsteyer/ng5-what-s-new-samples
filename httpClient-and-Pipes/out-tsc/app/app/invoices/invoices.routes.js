import { InvoicesSearchWithDataDrivenTabsComponent } from './invoices-search-with-dd-tabs.component';
import { InvoicesSearchWithTabsComponent } from './invoices-search-with-tabs.component';
import { InvoicesSearchWithAltTabsComponent } from './invoices-search-with-alt-tabs.component';
import { InvoicesSearchFirstStepsPartialComponent } from './invoices-search-first-steps-partial.component';
import { InvoicesSearchWithExtendedDataDrivenTabsComponent } from './invoices-search-with-ext-dd-tabs.component';
export var INVOICES_ROUTES_CONFIG = [
    {
        path: 'invoices-ext-dd-tabs',
        component: InvoicesSearchWithExtendedDataDrivenTabsComponent
    },
    {
        path: 'invoices-dd-tabs',
        component: InvoicesSearchWithDataDrivenTabsComponent
    },
    {
        path: 'invoices-tabs',
        component: InvoicesSearchWithTabsComponent
    },
    {
        path: 'invoices-alt-tabs',
        component: InvoicesSearchWithAltTabsComponent
    },
    {
        path: 'invoices-partial',
        component: InvoicesSearchFirstStepsPartialComponent
    }
];
//# sourceMappingURL=invoices.routes.js.map