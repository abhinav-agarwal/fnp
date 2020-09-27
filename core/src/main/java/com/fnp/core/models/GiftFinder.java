package com.fnp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import java.util.List;
import java.util.Map;

public interface GiftFinder extends ComponentExporter {

  String getTitle();

  String getPlaceholderOne();

  String getPlaceholderTwo();

  String getCTALabel();

}
