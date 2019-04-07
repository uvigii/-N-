import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    selectedBarIndex: number = 0;

    constructor() {
    }

    ngOnInit(): void {
    }
}
