package com.fnp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import java.util.List;
import java.util.Map;

public interface BestSeller extends ComponentExporter {

  List<Map> getItems();

  String getTitle();

  String getCTALabel();

}
