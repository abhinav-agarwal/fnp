package com.fnp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import java.util.List;
import java.util.Map;

public interface Hero extends ContainerExporter {

  List<Map> getImageDetails();

}
