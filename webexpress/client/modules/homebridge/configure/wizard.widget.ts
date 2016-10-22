import { ObjectLayoutWidget } from "angular2-schema-form";
import { Component } from "@angular/core";

@Component({
	selector: "wizard-widget",
	templateUrl: 'wizard.widget.html',
	styles: [require("./wizard.widget.css")]
})
export class WizardWidget extends ObjectLayoutWidget {
	private currentPage = null;

	ngOnInit() {
		this.currentPage = 0;
	}

	nextPage() {
		if (this.hasNextPage())
			++this.currentPage;
	}

	previousPage() {
		if (this.currentPage>0)
			--this.currentPage;
	}

	hasPreviousPage() {
		return this.currentPage > 0;
	}

	hasNextPage() {
		return this.currentPage + 1 < this.schema.fieldsets.length;
	}

}