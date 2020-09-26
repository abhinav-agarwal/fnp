package com.fnp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import java.util.List;
import java.util.Map;

public interface Header extends ComponentExporter {

  String getImageSrc();

  String getCTALabel();

  String getSearchButtonText();

  List<Map> getIconDetails();

}
